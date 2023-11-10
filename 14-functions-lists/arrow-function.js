function funcaoExplicita() {
    console.log(this);
}

const funcaoArrow = () => {
    console.log(this);
}

const teste = {
    a: 1,
    funcaoExplicita,
    funcaoArrow
}

teste.funcaoExplicita();
teste.funcaoArrow();