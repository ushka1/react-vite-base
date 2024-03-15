import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('/cats', () => {
    return HttpResponse.json({
      message: "It's Keyboard Cat again!",
    });
  }),
];
