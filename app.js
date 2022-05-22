//scrivere un programma che stampi in console i numeri da 1 a 100 all'avvio della pagina
for (let i = 0; i <= 100; i++) {
    output = i;
    if (i % 3 == 0) {
        //se è % di 3 compare la scritta fizz
        output = "fizz"
    } 

    if (i % 5 == 0) {
        //se è % di 5 compare la scritta buzz
        output = "buzz"
    }

    if (i % 3 == 0 && i % 5 == 0) {
        //se è % di 3 e 5 compare la scritta fizzbuzz
        output = "fizzbuzz"
    }
        
    console.log(output)
}
