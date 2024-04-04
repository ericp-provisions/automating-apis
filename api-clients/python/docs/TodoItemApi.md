# todo_api.TodoItemApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_todo_item_get**](TodoItemApi.md#api_todo_item_get) | **GET** /api/TodoItem | 
[**api_todo_item_id_delete**](TodoItemApi.md#api_todo_item_id_delete) | **DELETE** /api/TodoItem/{id} | 
[**api_todo_item_id_get**](TodoItemApi.md#api_todo_item_id_get) | **GET** /api/TodoItem/{id} | 
[**api_todo_item_id_put**](TodoItemApi.md#api_todo_item_id_put) | **PUT** /api/TodoItem/{id} | 
[**api_todo_item_post**](TodoItemApi.md#api_todo_item_post) | **POST** /api/TodoItem | 

# **api_todo_item_get**
> list[TodoItem] api_todo_item_get()



### Example
```python
from __future__ import print_function
import time
import todo_api
from todo_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = todo_api.TodoItemApi()

try:
    api_response = api_instance.api_todo_item_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TodoItemApi->api_todo_item_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[TodoItem]**](TodoItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_todo_item_id_delete**
> api_todo_item_id_delete(id)



### Example
```python
from __future__ import print_function
import time
import todo_api
from todo_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = todo_api.TodoItemApi()
id = 789 # int | 

try:
    api_instance.api_todo_item_id_delete(id)
except ApiException as e:
    print("Exception when calling TodoItemApi->api_todo_item_id_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_todo_item_id_get**
> TodoItem api_todo_item_id_get(id)



### Example
```python
from __future__ import print_function
import time
import todo_api
from todo_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = todo_api.TodoItemApi()
id = 789 # int | 

try:
    api_response = api_instance.api_todo_item_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TodoItemApi->api_todo_item_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**TodoItem**](TodoItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_todo_item_id_put**
> api_todo_item_id_put(id, body=body)



### Example
```python
from __future__ import print_function
import time
import todo_api
from todo_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = todo_api.TodoItemApi()
id = 789 # int | 
body = todo_api.TodoItem() # TodoItem |  (optional)

try:
    api_instance.api_todo_item_id_put(id, body=body)
except ApiException as e:
    print("Exception when calling TodoItemApi->api_todo_item_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **body** | [**TodoItem**](TodoItem.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_todo_item_post**
> TodoItem api_todo_item_post(body=body)



### Example
```python
from __future__ import print_function
import time
import todo_api
from todo_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = todo_api.TodoItemApi()
body = todo_api.TodoItem() # TodoItem |  (optional)

try:
    api_response = api_instance.api_todo_item_post(body=body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TodoItemApi->api_todo_item_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TodoItem**](TodoItem.md)|  | [optional] 

### Return type

[**TodoItem**](TodoItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

