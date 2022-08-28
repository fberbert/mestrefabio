import Carousel from 'better-react-carousel'
import ReactPlayer from 'react-player'
// https://github.com/devpanther/better-react-carousel
// https://github.com/cookpete/react-player

const Gallery = () => {
  const my_videos = [
    {
      video: "https://www.youtube.com/watch?v=lmG8BlbxCtE",
      label: "Video 1"
    },
    {
      video: "https://www.youtube.com/embed/WZUY7w6s3cQ",
      label: "Video 2"
    },
    {
      video: "https://www.youtube.com/embed/hdZMqMeruSQ",
      label: "Video 3"
    },
    {
      video: "https://www.youtube.com/embed/3mCMnqEJdZ8",
      label: "Video bla bla"
    }
  ]

  const rows = Math.ceil(my_videos.length / 2)

  return (
    <>
    <Carousel cols={2} rows={rows} gap={10}>
      {
        my_videos.map( e => {
          return (
            <Carousel.Item key={e.video}>
              <ReactPlayer 
                url={e.video}
                controls={true}
                width="100%"
              />
              <div className="fbox-content center"><h3>{e.label}</h3></div>
      </Carousel.Item>
          )
        })
      }
    </Carousel>
    </>
  )
}

const Automacoes = () => (
  <div>
    <section id="automacoes" className="pt-3 p-5">
      <div className="fancy-title title-bottom-border">
			  <h3>Automações</h3>
      </div>

      <Gallery/>

    </section>
  </div>
)

export default Automacoes
