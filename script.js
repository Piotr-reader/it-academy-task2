let n = 1000;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) continue;
    }
    console.log(i);
}