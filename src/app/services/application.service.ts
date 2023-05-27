import packageJson from '../../../package.json';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  context = packageJson;

  constructor() { }
}
