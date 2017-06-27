/**
 * Created by sandeepj on 27/6/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api'
function SelectLanguage(props) {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className="languages">
            {languages.map((lang) => {
                console.log(this);
                return (
                    <li
                        style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
                        onClick={props.onSelect.bind(null, lang)}
                        key={lang}>
                        {lang}
                    </li>
                )
            })}
        </ul>
    )
}
function RepoGrid(props) {
    return (
        <ul className="popularList">
            {props.repos.map((repo, index) => {
                return (
                    <li key={repo.name} className="popularItem">
                        <div className="popularRank">#{index + 1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img className="avatar" src={repo.owner.avatar_url}
                                     alt={'Avatar for ' + repo.owner.login}/>
                            </li>
                            <li><a href={repo.html_url}>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}
RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired,
}
SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,

}

class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null,
        }
        this.updatelanguage = this.updatelanguage.bind(this);
    }

    componentDidMount() {
        this.updatelanguage(this.state.selectedLanguage)
    }

    updatelanguage(lang) {
        this.setState({
            selectedLanguage: lang,
            repos: null
        })
        api.fetchPopularRepos(lang)
            .then((repos) => {
                this.setState(() => {
                    return {
                        repos: repos
                    }
                })
            })
    }

    render() {
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updatelanguage}/>
                {!this.state.repos
                    ? <p>Loading..</p>
                    : <RepoGrid repos={this.state.repos}/>
                }

            </div>
        )
    }
}
export default Popular;