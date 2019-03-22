of(1,2,3).map(x => x + 1).filter(x => x > 2);

of(1,2,3).pipe(
    map(x => x + 1),
    filter(x => x > 2)
);