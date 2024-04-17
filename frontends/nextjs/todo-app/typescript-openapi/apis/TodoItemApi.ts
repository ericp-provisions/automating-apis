/* tslint:disable */
/* eslint-disable */
/**
 * TodoAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  TodoItem,
} from '../models/index';
import {
    TodoItemFromJSON,
    TodoItemToJSON,
} from '../models/index';

export interface ApiTodoItemIdDeleteRequest {
    id: number;
}

export interface ApiTodoItemIdGetRequest {
    id: number;
}

export interface ApiTodoItemIdPutRequest {
    id: number;
    todoItem?: TodoItem;
}

export interface ApiTodoItemPostRequest {
    todoItem?: TodoItem;
}

/**
 * 
 */
export class TodoItemApi extends runtime.BaseAPI {

    /**
     */
    async apiTodoItemGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TodoItem>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/TodoItem`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TodoItemFromJSON));
    }

    /**
     */
    async apiTodoItemGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TodoItem>> {
        const response = await this.apiTodoItemGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiTodoItemIdDeleteRaw(requestParameters: ApiTodoItemIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling apiTodoItemIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/TodoItem/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiTodoItemIdDelete(requestParameters: ApiTodoItemIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiTodoItemIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiTodoItemIdGetRaw(requestParameters: ApiTodoItemIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TodoItem>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling apiTodoItemIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/TodoItem/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TodoItemFromJSON(jsonValue));
    }

    /**
     */
    async apiTodoItemIdGet(requestParameters: ApiTodoItemIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TodoItem> {
        const response = await this.apiTodoItemIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiTodoItemIdPutRaw(requestParameters: ApiTodoItemIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling apiTodoItemIdPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/TodoItem/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TodoItemToJSON(requestParameters['todoItem']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiTodoItemIdPut(requestParameters: ApiTodoItemIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiTodoItemIdPutRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiTodoItemPostRaw(requestParameters: ApiTodoItemPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TodoItem>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/TodoItem`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TodoItemToJSON(requestParameters['todoItem']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TodoItemFromJSON(jsonValue));
    }

    /**
     */
    async apiTodoItemPost(requestParameters: ApiTodoItemPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TodoItem> {
        const response = await this.apiTodoItemPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
