import { TestBed } from '@angular/core/testing';

import { BookServiceService } from './books.service';

describe('BookServiceService', () => {
  let service: BookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
