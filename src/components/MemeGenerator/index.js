import {Component} from 'react'

import {Heading, Container, Button, BackgroundImage} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageText: '',
    topText: '',
    bottomText: '',
    selectedFontSize: fontSizesOptionsList[0].optionId,
    outline: false,
  }

  changeTopText = event => this.setState({topText: event.target.value})

  changeBottomText = event => this.setState({bottomText: event.target.value})

  changeFontSize = event =>
    this.setState({selectedFontSize: event.target.value})

  selectImage = event => this.setState({imageText: event.target.value})

  memeGenerate = () => {
    const {imageText, topText, bottomText, outline} = this.state
    // this.setState({outline: false})
    return (
      <BackgroundImage image={imageText} outlineText={outline}>
        <p>{topText}</p>
        <p>{bottomText}</p>
      </BackgroundImage>
    )
  }

  render() {
    const {imageText, topText, bottomText, selectedFontSize} = this.state
    return (
      <Container outline data-testid="meme">
        <Heading>Meme Generator</Heading>
        <Container>
          <label htmlFor="imageUrl">Image URL</label>
          <input
            onChange={this.selectImage}
            value={imageText}
            type="text"
            id="imageUrl"
          />
        </Container>
        <Container>
          <label htmlFor="top text">Top Text</label>
          <input
            onChange={this.changeTopText}
            value={topText}
            type="text"
            id="top text"
          />
        </Container>
        <Container>
          <label htmlFor="bottom text">Bottom Text</label>
          <input
            onChange={this.changeBottomText}
            value={bottomText}
            type="text"
            id="bottom text"
          />
        </Container>
        <Container>
          <select
            onChange={this.changeFontSize}
            value={selectedFontSize}
            id={selectedFontSize}
          >
            {fontSizesOptionsList.map(each => (
              <option id={each.optionId}>{each.displayText}</option>
            ))}
          </select>
        </Container>
        <Container>
          <Button onClick={() => this.memeGenerate} type="button">
            Generate
          </Button>
        </Container>
        {this.memeGenerate()}
      </Container>
    )
  }
}

export default MemeGenerator
