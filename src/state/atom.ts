import { atom } from 'recoil';

export const languageState = atom<string>({
	key: 'languageState',
	default: 'pt-br',
});

export const githubToken = atom({
    key: 'githubToken',
    default: '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'
})
