// 1-misol
{
    let a = 5
    let b = 2

    while (a >= b) {
        a -= b
    }
    console.log(a);
}

// 2-misol 
{
    let a = 8
    let b = 3
    let count = 0
    
    while (a >= b) {
        a -= b
        count++
    }
    console.log(count);
}

// 3-misol 
{
    let n = 18
    let k = 4
    let butunQismi = 0
    let qoldiq = n

    while (qoldiq >= k) {
        qoldiq -= k
        butunQismi++
    }
    console.log("Butun qismi ", butunQismi);
    console.log("qoldiq ", qoldiq);
}

// 4-misol 
{
    let n = 27;

while (n > 1) {
  if (n % 3 !== 0) {
    console.log("3 -ning darajasi emas");
    break;
  }
  n = n / 3;
}

if (n === 1) {
  console.log("3-ning darajasi");
}

}
// 5-misol 
{
    let n = 64
    let k = 0

    while (n >= 2) {
        n = n / 2
        k++
    }
    console.log(k); 
}

// 6-misol

// 7-misol 
{
    let n = 12;
    let k = 1; 

    while (k * k <= n) {
    k++;
}
    console.log(k);
}

// 8-misol 
{
    let n = 20;
    let k = 0;

    while ((k + 1) * (k + 1) <= n) {
    k++;
}
console.log(k);
}

// 9-misol 
