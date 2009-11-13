function(doc) {
  if (doc.type == "bookmark") {
    emit(doc.created_at, {
      name: doc.name,
      url: doc.url,
      tags: doc.tags,
      created_at: doc.created_at
    });
  }
};