import {Component} from 'react'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class BrowserHistory extends Component {
  state = {searchInput: '', userInput: initialHistoryList, isTrue: false}

  fillFunction = value => {
    const {userInput} = this.state
    const searchResults = userInput.filter(eachValue => eachValue.id !== value)
    if (searchResults.length === 0) {
      this.setState({userInput: searchResults, isTrue: true})
    } else {
      this.setState({userInput: searchResults})
    }
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, userInput} = this.state
    const searchResults = userInput.filter(eachSearch =>
      eachSearch.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="bar-holder">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="user-text"
              placeholder="Search History"
              value={searchInput}
              onChange={this.onChangeSearch}
            />
          </div>
        </div>
        <div className="content-container">
          <ul className="content">
            {searchResults.map(eachItem => (
              <li key={eachItem.id} uniqueId={eachItem.id} className="items">
                <p className="times">{eachItem.timeAccessed}</p>
                <div className="icons">
                  <img
                    src={eachItem.logoUrl}
                    className="logos"
                    alt="domain logo"
                  />
                  <div className="logo-content">
                    <p className="name">{eachItem.title}</p>
                    <p className="website">{eachItem.domainUrl}</p>
                  </div>
                </div>
                <button
                  className="delete-button"
                  data-testid="delete"
                  type="button"
                  onClick={() => this.fillFunction(eachItem.id)}
                >
                  <img
                    className="delete-icon"
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                  />
                </button>
              </li>
            ))}
          </ul>
          <div className="eamty-container">
            <p className="eamty-element">There is no history to show</p>
          </div>
        </div>
      </div>
    )
  }
}
export default BrowserHistory
