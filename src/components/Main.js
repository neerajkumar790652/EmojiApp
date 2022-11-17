import { useState, useEffect } from 'react';
import emojiList from '../emojiList';
import EmojiContainer from './EmojiContainer';
const Main = () => {
	const [list, setList] = useState(emojiList);
	const [keyword, setKeyword] = useState('');
	const typed = (e) => {
		const value = e.target.value.toLowerCase();
		setKeyword(value);
	};
	useEffect(() => {
		// filter based on description
		const filterEmoji = emojiList.filter((singleEmoji) => {
			if (singleEmoji.description.startsWith(keyword)) {
				return true;
			}
			if (singleEmoji.category.startsWith(keyword)) {
				return true;
			}
			if (singleEmoji.aliases.some((e) => e.startsWith(keyword))) {
				return true;
			}
			return false;
		});
		setList(filterEmoji);
	}, [keyword]);

	return (
		<main>
			<input type="text" placeholder="Filter 🔎" onKeyUp={typed} className='Input' />
			<h3 id="result">Result for- {keyword}</h3>
			<hr />
			{list.length === 0 ? (
				<p>No emoji Found</p>
			) : (
				<EmojiContainer list={list}/>
			)}
		</main>
	);
};
export default Main;
