import { registerBlockExtension } from '@10up/block-components';
import { Button } from '@wordpress/components';
import { BlockControls } from '@wordpress/block-editor';

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
	console.log('Hello from Sendig!');

	function handleClick() {
		console.log('Clicked from Sendig!');
	}

	return (
		<BlockControls>
			<Button
				variant="primary"
				onClick={ handleClick }
			>
				Click here
			</Button>
		</BlockControls>
	);
}


function generateClassNames(props) {

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