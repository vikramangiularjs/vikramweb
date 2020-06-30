var myName = angular.module('name',['ngRoute','ngAnimate']);
myName.config(['$routeProvider',function($routeProvider) {
$routeProvider
    .when('/home',{
        templateUrl:'views/home.html'
    })
    .when('/movies',{
        templateUrl:'views/movies.html'
    })
    .when('/tvshow',{
        templateUrl:'views/tvshow.html'
    })
    .when('/technology',{
        templateUrl:'views/technology.html'
    })
    .when('/food',{
        templateUrl:'views/food.html'
    })
    .when('/person',{
        templateUrl:'views/person.html'
    })
    .when('/contact',{
        templateUrl:'views/contact.html'
    })
    .otherwise({
        redirectTo: '/home'
    });
}]);
myName.controller('technologyController',function($scope){
    $scope.technology =[
        {
            name:'Java',
            desc:'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.'
        },
        {
            name:'Python',
            desc:'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python design philosophy emphasizes code readability with its notable use of significant whitespace.'
        },
        {
            name:'PHP',
            desc:'PHP is a popular general-purpose scripting language that is especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group.'
        },
        {
            name:'C ',
            desc:'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.'
        },
        {
            name:'Javascript',
            desc:'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
        },
        {
            name:'Pascal',
            desc:'Blaise Pascal was a French mathematician, physicist, inventor, writer and Catholic theologian. He was a child prodigy who was educated by his father, a tax collector in Rouen.'
        },
        
    ];
    });
    myName.controller('foodController',function($scope){
        $scope.foods =[
            {
                name:'Bread',
                desc:'Bread is a staple food prepared from a dough of flour and water, usually by baking.'
            },
            {
                name:'Sandwich',
                desc:'A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.'
            },
            {
                name:'Rice',
                desc:'Rice is the seed of the grass species Oryza glaberrima or Oryza sativa. As a cereal grain, it is the most widely consumed staple food for a large part of the world human population, especially in Asia and Africa.'
            },
            {
                name:'Pizza',
                desc:'DescriptionPizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients which is then baked at a high temperature, traditionally in a wood-fired oven. '
            },
            
        ];
        });
        myName.controller('moviesController',function($scope){
            $scope.movies =[
                {
                    name:'Baaghi 3',
                    desc:'Ronnie and Vikram are brothers who share an unbreakable bond. Since childhood, Ronnie always comes to the rescue whenever Vikram falls in any trouble. Their journey begins when a certain turn in events, leads Vikram to travel abroad to complete some work. On this trip, Vikram gets kidnapped by people who are not to be messed with but as Ronnie witnesses his brother getting beaten and kidnapped, he knows that he will do whatever it takes to destroy anyone and anything that stands in the way of Vikrams safety. Ronnie goes on a rampage of destruction to see his brother safe again, even if it means that he independently has to take on an entire country.'
                },
                {
                    name:'Yaariyan',
                    desc:'Lakshya, Jiya, Saloni, Pardy and Neil, five friends who study in a college in Sikkim, strive to win a competition in order to stop property developers from demolishing their campus.'
                },
                {
                    name:'Ant-Man',
                    desc:'Despite being under house arrest, Scott Lang, along with the Wasp, sets out to help Dr Hank Pym to enter the quantum realm as they face new enemies along the way.'
                },
                {
                    name:'End game',
                    desc:'Despite being under house arrest, Scott Lang, along with the Wasp, sets out to help Dr Hank Pym to enter the quantum realm as they face new enemies along the way.'
                },
                
            ];
            });
            myName.controller('tvshowController',function($scope){
                $scope.tvshow =[
                    {
                        name:'Aarya',
                        desc:'Aarya is an Indian crime drama web television series co-created by Ram Madhvani and Sandeep Modi based on the Dutch drama series Penoza by Pieter Bart Korthuis] for Hotstars label Hotstar Specials starring Sushmita Sen in the titular role.'
                    },
                    {
                        name:'Naagin',
                        desc:'Shivanya, the daughter of a shape-shifting snake couple, sets out to avenge her parents, who are murdered. While on her mission, she marries Ritik, the son of one of the murderers.'
                    },
                    {
                        name:'Betaal',
                        desc:'Hired to displace tribal villagers, highway officials unearth an old curse and an army of British soldier-zombies.'
                    },
                    {
                        name:'Big Boss',
                        desc:'Contestants from all walks of life are locked in a common house. They compete against each other to win a cash prize by saving themselves from eliminations based on public votes.'
                    },
                    
                ];
                });
