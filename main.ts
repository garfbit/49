let I = 0
let D = 0
let N = 1234
while (N > 0) {
    D = N % 10
    N = N / 10
    I = I * 10 + D
}
basic.showNumber(I)
