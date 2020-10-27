import {
    IViewEngine,
    RequestAbstract,
    ResponseAbstract,
    IRequestContext,
    ViewEngineParams,
    ControllerResult
} from '@type-server/typeserver';

export class HandlebarsViewEngine implements IViewEngine {

    render(
        req: RequestAbstract,
        res: ResponseAbstract,
        ctx: IRequestContext,
        params: ViewEngineParams
    ): ControllerResult {
        
    }

}