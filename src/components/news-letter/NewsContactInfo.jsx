const NewsContactInfo = () => {
  const contactDetails = [
    { id: 0, contactHead: "Contact Us", contactParOne: "Email: johndoe@gmail.com", contactPhone: "Phone: +234-0400-0000" },
    { id: 1, contactHead: "Our store", contactParOne: "36 apala disco estate, Nigeria." }
  ]

  return (
    <>
      {contactDetails.map(({ id, contactHead, contactParOne, contactPhone }) => {
        return (
          <main key={id} className="contactMain">
            <h1 className="contactHead">{contactHead}</h1>
            <p className="contactParagraph">{contactParOne}</p>
            {contactPhone && <p className="contactParagraph">{contactPhone}</p>}
          </main>
        );
      })}
    </>
  );

}

export default NewsContactInfo;