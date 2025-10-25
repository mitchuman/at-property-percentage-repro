const code_dev = `/* dev */
@property --action-offset {
	syntax: '<percentage>';
	<span style="color: var(--color-green-500);">initial-value: 0%;</span>
	inherits: false;
}`

const code_build = `/* build */
@property --action-offset {
	syntax:"<percentage>";
	inherits:false;
	<span style="color: var(--color-red-500);">initial-value:0</span> 👈
}`

export default function () {
	return (
		<>
			<button className="action m-auto border-2 border-dashed border-gray-200 text-2xl">
				<span>Hover me</span>
			</button>

			<small>
				*This works now, but the <code>@property</code> declaration fails to
				include the "%" for the initial-value.
			</small>

			<div className="grid grid-cols-2 items-center gap-4">
				<pre dangerouslySetInnerHTML={{ __html: code_dev }} />
				<pre dangerouslySetInnerHTML={{ __html: code_build }} />
			</div>
		</>
	)
}
