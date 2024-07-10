/**
 * Represents a calculator that performs basic arithmetic operations.
 */
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
  sub(a: number, b: number): number {
    return a - b;
  }
  mul(a: number, b: number): number {
    return a * b;
  }
  div(a: number, b: number): number {
    return a / b;
  }
  fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
}
