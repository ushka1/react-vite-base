import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('/cats', () => {
    return HttpResponse.json({
      data: [
        { id: 1, name: 'Luna' },
        { id: 2, name: 'Simba' },
        { id: 3, name: 'Pixel' },
      ],
    });
  }),
];
