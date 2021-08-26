import { searchYouTube } from '../../utils/searchYoutube';

describe('Testing searchYoutube Function', () => {
  test('Should return more than 20 videos', async () => {
    const test = await searchYouTube('Testing');
    expect(test.items.length).toBeGreaterThan(20);
  });
});
