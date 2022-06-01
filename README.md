# password-validator

## Desafio 
Nesse desafio, você deverá construir um método/função que deve conseguir receber uma senha e retornar se a mesma é válida, 
dadas algumas validações. Utilize a linguagem de programação Javascript/Typescript.

## Requisitos
- Deve ser possível receber uma string que passará pelas seguintes validações:
    - A senha deve conter de 16 a 32 caracteres;
    - Deve conter pelo menos 2 caracteres especiais;
    - Deve conter letras maiúsculas e minúsculas;
    - Não pode conter mais de 3 sequencias de caracteres, letras ou números (abc ou 123, por exemplo).
- Deve retornar um objeto contendo o resultado (verdadeiro ou falso), e uma lista de erros de validação em que a senha não passou;
- **Deve conter testes unitários para validar os casos listados no exemplo.**

## Tecnologias utilizadas
- Typescript
- Jest
