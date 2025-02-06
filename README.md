# Javascript Type Coercion Bug
This example demonstrates a common Javascript bug stemming from type coercion.  The function `foo` intends to add two numbers. However, due to Javascript's loose typing, when a number and a string are added, it performs string concatenation rather than numerical addition.  The solution below shows how to explicitly type check or use `parseInt()` to avoid this issue. 