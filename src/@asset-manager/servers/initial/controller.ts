import { Bind } from '../../decoraters';
import { ServerSidePropsContext } from '../../types';
import { InitialService } from './services';

class InitialController {
  constructor(private initialService: InitialService) {}

  @Bind()
  initial<T>(context: ServerSidePropsContext) {
    return this.initialService.initial<T>(context);
  }
}

export const initialController = new InitialController(new InitialService());
