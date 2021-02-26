import React from 'react';
import Modal from 'react-modal';
import './ModalPreview.css';

Modal.setAppElement('#root');

const ModalPreview = ({setPreviewStateField, setPreview}) => {
	return(
		<div>
		 	<Modal isOpen={setPreview} >
	    		<div
	        	className="flex justify-end">
				<p
	        	className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer flex justify-end items-center" 
	        	onClick={() => setPreviewStateField(false)}
				>X</p> 
	    		</div>
				<h1>List of Sr Telecallers</h1>
				<p>Modal Body</p>
			</Modal>
		</div>
	);
}

export default ModalPreview;