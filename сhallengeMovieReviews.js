    var movies = [
            {
            title: "Puff the Magic Dragon", 
            review: "Best movie ever!!"
            },
            
            {
                title: "Pulp Fiction",
                review: "Best of torantino movie!"
            }
    ];
    
            for (var i = 0; i < movies.length; i++) {
                fill(84, 140, 209);
            textAlign(CENTER, CENTER);
            
            textSize(20);
            text(movies[i].title, 200, 50 * i + 30);
            
            textSize(14);
            text(movies[i].review, 200, 50 * i + 55);
            }
