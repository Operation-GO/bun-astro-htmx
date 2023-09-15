// interface Song {
//   title: string,
//   artist: string,
//   genre: string,
// }

const songs = [
  { title: 'Lose Yourself', artist: 'Eminem', genre: 'hip-hop'},
  { title: 'Breakeven', artist: 'Scripts', genre: 'pop'},
  { title: 'Kendricks', artist: 'Kenny Kilat', genre: 'rap'}
]

export async function GET({params, request}) {
  return new Response(
    JSON.stringify({
      songs
    })
  )
}

export async function POST({ request }){
  const data = await request.formData();
  const song = {
    title: data.get('title'),
    artist: data.get('artist'),
    genre: data.get('genre')
  }
  songs.push(song)
  console.log(songs)
  return new Response(
    JSON.stringify({
      message: 'Updated Item',
      data,
      song
    })
  )
}
