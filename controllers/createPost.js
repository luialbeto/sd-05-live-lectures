const mockPosts = [
  {
    title: 'título fake',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
  },
  {
    title: 'título fake',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
  },
  {
    title: 'título fake',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
  },
  {
    title: 'título fake',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
  },
];

module.exports = async (req, res) => {
  const { title, content } = req.body;

  mockPosts.push({ title, content, createdBy: req.user._id });

  res.status(201).json({ title, content });
};
