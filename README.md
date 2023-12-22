# Repósitorio para guardar meus estudos com typescript

Basicamente quero deixar registrado aqui toda a minha jornada inicial de aprendizado com typescript, até o momento sei codar com react, node, javascript como um todo com diversas bibliotecas, porem quando encontrei o typescript me encantei e quero passar a desenvolver meus projetos com este maravilhoso superset que me faz evitar varias situacoes desagradaveis com javascript.

## Primeiramente vi sobre as configurações iniciais  do projetos

instalando dependencias globais como o


## Instalação do typescript

```bash
  npm install typescript -g
```
basicamente a flag -g é para indicar que a instalacao vai ser global no meu dispositivo

## criacao do arquivo tsconfig

```bash
  tsc -init
```
 vai gerar um arquivo de configuracoes inicias pre setadas para gerenciar os arquivos typescript, .tsc


## podem haver duas formas de trabalhar

pode simplesmente passar um 
```bash
  tsc index.ts
```
que vai compilar o arquivo que for passado

ou o 

```bash
  tsc -w
```
que vai compilar o arquivo novamente sempre houver modificações
