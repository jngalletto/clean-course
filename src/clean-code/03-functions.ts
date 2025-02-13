(() => {

    // función para obtener información de una película por Id
    function getMovieInfoById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[]; 
    }

    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function checkFulllName(fullName: String) {
        return true
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (checkFulllName('fernando')) return false;

        console.log('Crear actor');
        return true;        

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        
        if ( isDead ) return 1500;
        
        if ( isSeparated ) return  2500;
        
        return (isRetired) ? 30000 : 4000
    }
    


})();