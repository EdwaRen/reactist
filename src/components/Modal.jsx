import './styles/modal.less'

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import CloseIcon from './icons/CloseIcon.svg'

class Box extends React.Component {
    constructor(props, context) {
        super(props, context)
        this._handleKeyDown = this._handleKeyDown.bind(this)
        this._closeModal = this._closeModal.bind(this)
        this._handleOverlayClick = this._handleOverlayClick.bind(this)
        window.addEventListener('keydown', this._handleKeyDown)
        window.addEventListener('click', this._handleOverlayClick)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this._handleKeyDown)
        window.removeEventListener('click', this._handleOverlayClick)
    }

    _closeModal() {
        ReactDOM.unmountComponentAtNode(document.getElementById('modal_box'))
    }

    _handleKeyDown(event) {
        if (event.keyCode === 27) { // ESC
            this._closeModal()
        }
    }

    _handleOverlayClick(event) {
        if (this.props.closeOnOverlayClick && event && event.target && event.target.id === 'reactist-overlay') {
            this._closeModal()
        }
    }

    render() {
        let class_name = 'reactist_modal_box'

        if (this.props.large) {
            class_name += ' large'
        }

        if (this.props.className) {
            class_name += ` ${this.props.className}`
        }

        return (
            <div className='reactist_overlay' id='reactist-overlay'>
                <div className={ class_name }>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
Box.propTypes = {
    className: PropTypes.string,
    large: PropTypes.bool,
    closeOnOverlayClick: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

class Header extends React.Component {
    _closeModal(event) {
        event.preventDefault()
        if (typeof this.props.beforeClose === 'function') {
            this.props.beforeClose()
        }
        ReactDOM.unmountComponentAtNode(document.getElementById('modal_box'))
    }

    render() {
        return (
            <div className='reactist_modal_box__header'>
                <p>
                    {this.props.title && <span className='title'>{this.props.title}</span>}
                    {this.props.subtitle && <span className='subtitle'>{this.props.subtitle}</span>}
                    {this.props.children}
                </p>
                <a
                    className='close'
                    onClick={ this._closeModal.bind(this) }
                    href='#'
                >
                    <CloseIcon />
                </a>
            </div>
        )
    }
}
Header.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    beforeClose: PropTypes.func
}

class Body extends React.Component {
    _closeModal(event) {
        event.preventDefault()
        ReactDOM.unmountComponentAtNode(document.getElementById('modal_box'))
    }

    render() {
        let className = 'reactist_modal_box__body'
        if (this.props.className) {
            className += ` ${this.props.className}`
        }

        return (
            <div className={ className }>
                {this.props.showCloseIcon && (
                    <a
                        className='close'
                        onClick={ this._closeModal.bind(this) }
                        href='#'
                    >
                        <CloseIcon />
                    </a>)
                }
                {this.props.icon
                    ? ( <div className='dialog'>
                        <div className='icon'>{this.props.icon}</div>
                        <div className='content'>{this.props.children}</div>
                    </div> )
                    : this.props.children
                }
            </div>
        )
    }
}
Body.propTypes = {
    icon: PropTypes.node,
    showCloseIcon: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

class Actions extends React.Component {
    _onClick(on_click) {
        if (typeof on_click === 'function') {
            on_click()
        }
        ReactDOM.unmountComponentAtNode(document.getElementById('modal_box'))
    }

    render() {
        const children = React.Children.map(this.props.children, (child) => {
            if (!child) return false
            if (child.props.close) {
                return React.cloneElement(child, { onClick: () => this._onClick(child.props.onClick) })
            } else {
                return React.cloneElement(child)
            }
        })

        return (
            <div className='reactist_modal_box__actions'>
                {children}
            </div>
        )
    }
}
/**
 * Children can have an optional `close` property (boolean).
 * When supplied and set to true it will close the modal after the onClick function
 */
Actions.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Box

export const Modal = {
    Box,
    Header,
    Body,
    Actions
}
