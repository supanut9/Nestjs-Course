import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// ParamDecorator is out of DI system, so we need to use Interceptor to get access
// to service
export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    console.log('ID: ', request.session.userId);
    console.log('Current User: ', request.currentUser);

    return request.currentUser;
  },
);
