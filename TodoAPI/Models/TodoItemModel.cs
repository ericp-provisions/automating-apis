namespace TodoAPI.Models;

public class TodoItemModel
{
    public long Id { get; set; }
    public string? Name { get; set; }
    public bool IsComplete { get; set; }
}

// public class TodoItemModel
// {
//     public long Id { get; set; }
//     public string? Name { get; set; }
//     public bool IsComplete { get; set; }
//     public string? Author { get; set; }
// }