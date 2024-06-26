using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoAPI.Models;

namespace TodoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoItemController : ControllerBase
    {
        private readonly TodoContext _context;

        public TodoItemController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/TodoItem
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoItemModel>>> GetTodoItems()
        {
            var todoItems = await _context.TodoItems.ToListAsync();


            var newItems = new List<TodoItemModel>();
            foreach (var todo in todoItems)
            {
                newItems.Add(new TodoItemModel()
                {
                    Id = todo.Id,
                    Name = todo.Name,
                    IsComplete = todo.IsComplete
                });
            }

            return newItems;
        }

        // // GET: api/TodoItem
        // [HttpGet]
        // public async Task<ActionResult<IEnumerable<TodoItemModel>>> GetTodoItems()
        // {
        //     var todoItems = await _context.TodoItems.ToListAsync();

        //     var newItems = new List<TodoItemModel>();
        //     foreach (var todo in todoItems)
        //     {
        //         newItems.Add(new TodoItemModel()
        //         {
        //             Id = todo.Id,
        //             Name = todo.Name,
        //             IsComplete = todo.IsComplete,
        //             Author = "Eric"
        //         });
        //     }

        //     return newItems;
        // }

        // GET: api/TodoItem
        // [HttpGet]
        // public async Task<ActionResult<IEnumerable<TodoItemModel>>> GetTodoItems([FromQuery] bool? isComplete = null)
        // {
        //     IQueryable<TodoItem> query = _context.TodoItems;

        //     if (isComplete.HasValue)
        //     {
        //         query = query.Where(t => t.IsComplete == isComplete.Value);
        //     }

        //     var todoItems = await query.ToListAsync();

        //     var newItems = new List<TodoItemModel>();
        //     foreach (var todo in todoItems)
        //     {
        //         newItems.Add(new TodoItemModel()
        //         {
        //             Id = todo.Id,
        //             Name = todo.Name,
        //             IsComplete = todo.IsComplete,
        //             Author = "Eric"
        //         });
        //     }

        //     return newItems;
        // }

        // GET: api/TodoItem/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoItemModel>> GetTodoItem(long id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);
            if (todoItem == null)
            {
                return NotFound();
            }
            
            return new TodoItemModel()
            {
                Id = todoItem.Id,
                Name = todoItem.Name,
                IsComplete = todoItem.IsComplete,
            };

        }
        // // GET: api/TodoItem/5
        // [HttpGet("{id}")]
        // public async Task<ActionResult<TodoItemModel>> GetTodoItem(long id)
        // {
        //     var todoItem = await _context.TodoItems.FindAsync(id);
        //     if (todoItem == null)
        //     {
        //         return NotFound();
        //     }
            
        //     // return todoItem;

        //     return new TodoItemModel()
        //     {
        //         Id = todoItem.Id,
        //         Name = todoItem.Name,
        //         IsComplete = todoItem.IsComplete,
        //         Author = "Eric"
        //     };

        // }

        // PUT: api/TodoItem/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoItem(long id, TodoItem todoItem)
        {
            if (id != todoItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(todoItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TodoItem
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TodoItem>> PostTodoItem(TodoItem todoItem)
        {
            _context.TodoItems.Add(todoItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTodoItem), new { id = todoItem.Id }, todoItem);
        }

        // DELETE: api/TodoItem/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoItem(long id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);
            if (todoItem == null)
            {
                return NotFound();
            }

            _context.TodoItems.Remove(todoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TodoItemExists(long id)
        {
            return _context.TodoItems.Any(e => e.Id == id);
        }
    }
}
