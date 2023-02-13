


export function counter(text){
debugger
    let letters = 0;
    let words = 0;
    let sentences = 0;
  
    if(!text){
        return {
            letters,
            words,
            sentences
        }
    } 

    letters = text.match(/[a-zA-Z]/g).length
    words = text.split(' ').length
    sentences = text.split('. ').length

    return {
        letters,
        words,
        sentences
    }

}