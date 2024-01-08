export const ErrorRepositoryMap = new Map();

export class ErrorRepository {
  constructor() {
    this.errors = ErrorRepositoryMap;
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }

  addError(code, description) {
    this.errors.set(code, description);
  }
}
