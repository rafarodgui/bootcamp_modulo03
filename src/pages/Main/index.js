import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Container, Form, SubmitButton, List, Error } from './styles';

import api from '../../services/api';

class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false,
        error: false,
        errMsg: ''
    };

    // carregar dados no local storage
    componentDidMount() {
        const repositories = localStorage.getItem('repositories');

        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) });
        }
    }

    // armazernar dados no localstorage
    componentDidUpdate(_, prevState) {
        const { repositories } = this.state;

        if (prevState.repositories !== repositories) {
            localStorage.setItem('repositories', JSON.stringify(repositories));
        }
    }

    handleInputChange = e => {
        this.setState({
            newRepo: e.target.value
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true });

        try {
            const { newRepo, repositories } = this.state;

            if (repositories.indexOf(newRepo)) {
                throw new Error();
            }

            const response = await api.get(`/repos/${newRepo}`);

            const data = {
                name: response.data.full_name
            };

            this.setState({
                repositories: [...repositories, data],
                newRepo: '',
                loading: false,
                error: false
            });
        } catch {
            this.setState({
                error: true,
                loading: false,
                errMsg: 'verifique os dados e tente novamente'
            });
        }
    };

    render() {
        const { newRepo, loading, repositories, error, errMsg } = this.state;

        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositórios
                </h1>

                <Form onSubmit={this.handleSubmit} error={error}>
                    <input
                        type="text"
                        placeholder="adicionar repositório"
                        onChange={this.handleInputChange}
                        value={newRepo}
                    />
                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner color="#fff" size={14} />
                        ) : (
                            <FaPlus color="#fff" size={14} />
                        )}
                    </SubmitButton>
                </Form>
                <Error>{errMsg}</Error>
                <List>
                    {repositories.map(repository => (
                        <li key={repository.name}>
                            <span>{repository.name}</span>
                            <Link
                                to={`/repository/${encodeURIComponent(
                                    repository.name
                                )}`}
                                loading={loading}
                            >
                                Detalhes
                            </Link>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}

export default Main;
