### Modal Examples

```jsx
const ReactDOM = require('react-dom')
const Modal = require('../src/components/Modal').Modal

class ModalExamplePage extends React.Component {

    _renderHeaderModal() {
        this._renderModal((
            <Modal.Box>
                <Modal.Header>Header of Modal</Modal.Header>
            </Modal.Box>
        ))
    }

    _renderHeaderContentModal() {
        this._renderModal((
            <Modal.Box>
                <Modal.Header title='Header of Modal' subtitle='This is a smaller description' />
                <Modal.Body>The Body of a Modal can contain whatever you like!</Modal.Body>
            </Modal.Box>
        ))
    }

    _renderFullModal(closeOnOverlayClick = false) {
        this._renderModal((
            <Modal.Box closeOnOverlayClick={ closeOnOverlayClick }>
                <Modal.Header title='Header of Modal' subtitle='This is a smaller description' />
                <Modal.Body icon={ <img src='/icon.png' /> }>
                    The Body of a Modal can contain whatever you like! Like this very long Lorem Ipsum<br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Modal.Body>
                <Modal.Actions>
                    <Button name='Close the Modal' close />
                </Modal.Actions>
            </Modal.Box>
        ))
    }

    _renderConfirmationDialogModal() {
        this._renderModal((
            <Modal.Box>
                <Modal.Body icon={ <img src='/icon.png' /> } showCloseIcon>
                    <h1>Do you really want this?</h1><br />
                    The Body of a Modal can contain whatever you like! Like this very long Lorem Ipsum<br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Modal.Body>
                <Modal.Actions>
                    <Button name='Ok' primay close />
                </Modal.Actions>
            </Modal.Box>
        ))
    }

    _renderHugeModal() {
        this._renderModal((
            <Modal.Box>
                <Modal.Header title='This modal has a lot of content' />
                <Modal.Body>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                    <p>We add a lot of content to this modal to demonstrate its responsiveness.</p>
                </Modal.Body>
                <Modal.Actions>
                    <Button name='Ok' primay close />
                </Modal.Actions>
            </Modal.Box>
        ))
    }

    _renderLargeModal() {
        this._renderModal((
            <Modal.Box large>
                <Modal.Header title='This is a large modal' />
                <Modal.Body>
                    <p>I'm Large, so what?</p>
                </Modal.Body>
                <Modal.Actions>
                    <Button name='Ok' primary close />
                </Modal.Actions>
            </Modal.Box>
        ))

    }

    _renderModal(modal) {
        ReactDOM.render(modal, document.getElementById('modal_box'))
    }

    render() {
        return (
            <section className='styleguide __modals'>
                <div id='modal_box'></div>
                <Button
                    name='Click me to launch a Modal with Header'
                    onClick={ () => this._renderHeaderModal() }
                />
                <Button
                    name='Click me to launch a Modal with Header and Content'
                    onClick={ () => this._renderHeaderContentModal() }
                />
                <Button
                    name='Click me to launch a Modal with Header, Content and Actions'
                    onClick={ () => this._renderFullModal() }
                />
                <Button
                    name='Click me to launch a Modal acting as Confirmation Dialog'
                    onClick={ () => this._renderConfirmationDialogModal() }
                />
                <Button
                    name='Click me to launch a Modal with a lot of content'
                    onClick={ () => this._renderHugeModal() }
                />
                <Button
                    name='Click me to launch a Large Modal'
                    onClick={ () => this._renderLargeModal() }
                />
                <Button
                    name='Click me and click the overlay to close the modal'
                    onClick={ () => this._renderFullModal(true) }
                />
            </section>
        )
    }
}
<ModalExamplePage />

```
