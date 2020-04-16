# Visualization of a genetic algorithm applied to the traveling salesman problem

[Live link.](https://abelchiao.github.io/genetic-algorithm-visualization/)

## Background
Having come from a biotechnology background, I was inspired to pursue software by the revolutionary effect of advances in computation and data science on biological innovation.
Genetic algorithms are a product of the intersection between computer science and biology, and so this project marries my past experience in genetics with my more recently acquired coding capabilities.

### What are genetic algorithms?
Genetic algorithms are optimization algorithms inspired by the principle of Darwinian natural selection.
Solutions to a problem are represented as individual chromosomes within a population and are evaluated for individual fitness/performance.
The fittest individuals in the population reproduce, producing offspring with a combination of the parents' traits; the least fit individuals are removed from the population and replaced with the children.
Further population variance/diversity is driven by random events modeled after chromosomal crossover and genetic mutation, resulting in a population that converges toward a more optimal solution with each generation. 

### The traveling salesman problem
The traveling salesman problem (TSP) is a classic algorithmic problem that seeks to find the most efficient route that traverses every given city and returns the salesman to the original city. TSP, classified as NP-hard, is highly studied in theoretical computer science and is and has important applications in operations research.

A brute force approach to solving for the shortest route runs in O(n!) time, making this approach unrealistic for sample sizes of greater than a handful of cities. Assuming routes are symmetric (i.e. the distance between two cities is the same if the route is reversed), there exist (n-1)!/2 possible permutations. A problem consisting of 10 cities has 181,440 possible routes; 16 cities yields 653,837,184,000 possibilities. For even small sample sizes, this approach quickly becomes too computationally expensive for practical use.

This project visualizes the use of a genetic algorithm adapted to solve the traveling salesman problem.


## Features
### Visualize the algorithm's progression as the solution population converges toward the shortest distance.
![Demo run](images/demo_run.gif)
___

### Populate the map with a custom set of points and find the shortest route between them.
![Custom run](images/custom_run.gif)
___

### Manipulate algorithm parameters and test the algorithm under new conditions.
![Algorithm parameters](images/algo_params.gif)
___

## Algorithm implementation
In accordance with the theme of natural selection, solutions in genetic algorithms are represented as individuals in a population. 


#### Implementation: 
Logic is divided between ```Individual``` and ```Population``` classes.
```
class Individual {
  constructor(mutProb, ...coordinates) {
    this.geneCount = coordinates.length;
    this.mutProb = mutProb;
    this.chromosome = coordinates.slice();
    this.calculateFitness();
  }
}
```
```
class Population {
  constructor(popSize, crossProb, mutProb, elitismRate, ...coordinates) {
    this.coordinates = coordinates
    this.popSize = popSize;
    this.crossProb = crossProb;
    this.mutProb = mutProb;
    this.elitismRate = elitismRate
    this.totalFitness = 0;
    this.currentGen = [];
    this.genNumber = 0;
    this.numPossibleRoutes = factorial(coordinates.length)
    
    for (let i = 0; i < popSize; i++) {
      let chromosome = coordinates.slice().shuffle();
      let individual = new Individual(mutProb, ...chromosome);
      this.totalFitness += individual.fitness;
      this.currentGen.push(individual);
    }

    this.fittestEver = this.getFittest();
  }
}
```

## Technologies
___
This project was implemented using only vanilla JavaScript and HTML5 Canvas (and HTML/CSS).