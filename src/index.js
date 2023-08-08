import { registerBlockExtension } from '@10up/block-components';
import { Button } from '@wordpress/components';
import { BlockControls } from '@wordpress/block-editor';
import { pullLeft, pullRight } from '@wordpress/icons';

/**
 * BlockEdit
 *
 * a react component that will get mounted in the editor when the block
 * is selected. It is recommended to use Slots like `BlockControls` or
 * `InspectorControls` in here to put settings into the blocks
 * toolbar or sidebar.
 *
 * @param {object} props block props
 * @returns {JSX}
 */
function BlockEdit(props) {

	function handleClickLeft() {
		//props.setAttribute('hasFlipDirection', 'left');
	}

	function handleClickRight() {
		//props.setAttribute('hasFlipDirection', 'right');
	}

	return (
		<BlockControls>
			<Button
				icon={ pullLeft }
				label="Align Left"
				onClick={ handleClickLeft }
			/>
			<Button
				icon={ pullRight }
				label="Align Right"
				onClick={ handleClickRight }
			/>
		</BlockControls>
	);
}

function generateClassNames(attributes) {
	// TypeError: Cannot read properties of undefined (reading 'hasFlipDirection')
	console.log(attributes);
	//return 'has-flip-direction-' . attributes.hasFlipDirection;
	//return 'has-flip-direction-right';
}

registerBlockExtension(
	'core/separator',
	{
		extensionName: 'sendig-separator',
		attributes: {
			hasFlipDirection: {
				type: 'string',
				default: 'right',
			},
		},
		classNameGenerator: generateClassNames,
		Edit: BlockEdit,
	}
);