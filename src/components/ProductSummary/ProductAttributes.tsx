import React from 'react';

const ProductAttributes = ({
  description,
  ...otherAttributes
}: TProductAttributes) => (
  <section className="mt-8">
    <h3 className="text-base font-bold mb-3">About this avocado</h3>
    <p className="mb-4">{description}</p>

    <hr className="my-4" />

    <table className="grid rounded-lg">
      <thead className="bg-gray-200 border-2 border-b-0 p-3 rounded-t">
        <tr>
          <th>Attributes</th>
        </tr>
      </thead>

      <tbody className="rounded-b border">
        {Object.keys(otherAttributes).map((key) => (
          <tr className="grid grid-cols-3" key={key}>
            <td className=" p-3 border">{key}</td>
            <td className=" p-3 border col-span-2">
              {otherAttributes[key as keyof typeof otherAttributes]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* <style jsx>{``}</style> */}
  </section>
);

export default ProductAttributes;
