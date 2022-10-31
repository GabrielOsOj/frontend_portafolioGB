import { TestBed } from '@angular/core/testing';

import { InjectorTokenInterceptor } from './injector-token.interceptor';

describe('InjectorTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InjectorTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InjectorTokenInterceptor = TestBed.inject(InjectorTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
