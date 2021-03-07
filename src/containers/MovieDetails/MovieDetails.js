import React from 'react';
import { Grid,  Image, Segment,Button, Item , Rating, Label} from 'semantic-ui-react';
import './MovieDetails.css';

const MovieDetails = ({route,selectedMovie}) => {
    console.log('details props',selectedMovie.title);
    
    return (
        <div className="MovieDetails">
            <Segment placeholder >
            <Grid stackable columns={3}>
                
                <Grid.Column>
            
                    <Image className='poster'src={"https://www.themoviedb.org/t/p/w500"+selectedMovie.poster_path+""} />
            
                </Grid.Column>
                <Grid.Column>
                <Item>
                    <Item.Content>
                        <h1>{selectedMovie.title}   </h1>
                        <p>
                        <Label as='a' basic>
                        <Rating maxRating={6} defaultRating={(6*selectedMovie.vote_average)/10} icon='star' size='big' style={{'paddingRight':'10px'}} />
                        
                        score: {selectedMovie.vote_average}
                        </Label>
                        
                        </p>
                        <Item.Meta>
                      
                        <Label>
                        <span className='price'>Release Date: </span>
                            {selectedMovie.release_date}
                        </Label>
                        
                        <Label>
                        <span className='price'>Spoken Languages: </span>
                            {selectedMovie.original_language}
                        </Label>
                        <span className='stay'></span>
                        </Item.Meta>
                        <br /><Item.Description>{selectedMovie.overview}</Item.Description>
                        <span>
                       
                        </span>
                    </Item.Content>
                </Item>
        
                </Grid.Column>
               <Grid.Column>
                 <Button floated='right' content='close' secondary onClick={()=> route('search')} />
               </Grid.Column>
            </Grid>
            <Grid stackable columns={1}>
                
               
                <Grid.Column>
                <Item>
                    <Item.Content>
                    
                    <Label as='a' basic>
                    Votes: {selectedMovie.vote_count}
                    </Label>
                    </Item.Content>
                </Item>
            
                </Grid.Column>
               
            </Grid>
            
                    
                      
            </Segment>
        </div>
    )
}

export default MovieDetails;
