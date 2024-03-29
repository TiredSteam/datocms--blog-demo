import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { StructuredText } from "react-datocms";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-lg prose-p:to-rose-50 dark:prose-dark">
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            if (record.__typename === "DatoCmsImageBlock") {
              return <GatsbyImage image={record.image.gatsbyImageData} />;
            }
            return (
              <>
                <p>Don't know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </div>
    </div>
  );
}
