const conf = {
  appwiteProjectID: String(import.meta.env.VITE_APPRWRITE_PROJECT_ID),
  appwiteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwiteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwiteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwiteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;