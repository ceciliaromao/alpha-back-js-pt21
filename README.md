![](https://portal.alphaedtech.org.br/images/edtech/logo-edtech.webp)

# Back-End

## Módulo 7 - JavaScript - Part 21

### Exercícios de classe 🏫

#### Questão 1
Utilizando a classe Avatar criada na aula anterior, adicione os seguintes atributos e métodos à mesma:
* um atributo que represente pontos de vida, com valor inicial igual a 10;
* um atributo que represente pontos de dano, com valor inicial igual a 1;
* um método chamado ‘attack’, que representará uma ataque do avatar em seus adversários, sendo retornado pelo mesmo os pontos de dano especificados no atributo de pontos de danos;
* um método que represente um ataque recebido por um adversário, recebendo como parâmetro um valor de dano, que deve ser descontado dos pontos de vida do Avatar;
* caso os pontos de vida do Avatar sejam zerados, todos os métodos da classe devem ser executados;

#### Questão 2
Utilizando a classe Avatar criada como uma classe pai, crie as seguintes subclasses:
* Cowboy, que herdará todos os atributos e métodos de Avatar, e conterá os seguintes atributos e métodos:
  - um atributo que represente a munição disponível com o Cowboy, com valor inicial igual a 10;
  - um atributo que represente pontos de dano, com valor inicial igual a 2;
  - um método chamado ‘attack’, que represente a ação de atirar, sendo que ao atirar, a munição seja decrementada e o valor de dano seja retornado;
  - um método que adicione munição ao Cowboy, simulando que o mesmo encontrou munição na sua movimentação pelo jogo;
* Mago, que herdará todos os atributos e métodos de Avatar, e conterá os seguintes atributos e métodos:
  - um atributo que indique a quantidade de feitiços que o mesmo tem para lançar, com valor inicial igual a 10;
  - um atributo que represente pontos de dano, com valor inicial igual a 3;
  - um método chamado ‘attack’, que represente a ação de atacar com um feitiço, sendo que ao atacar, a quantidade de feitiços seja decrementada e o valor de dano seja retornado;
  - quando os feitiços se esgotarem, depois de 10 segundos, devem ser restaurados com a quantidade inicial.

###### tags: `módulo 7` `back-end` `JavaScript`