import Image from "next/image";

export default function RecentPostsSection() {
  const posts = [
    { title: "Is fast food good for your body?", date: "February 28, 2022", image: "/recentPost.png" },
    { title: "Change your food habit with organic food", date: "February 28, 2022", image: "/recentPost.png" },
    { title: "Do you like fast food for your life?", date: "February 28, 2022", image: "/recentPost.png" },
  ];

  return (
    <div className="w-72"> 
      <h3 className="text-xl font-bold mb-8">Recent Posts</h3>
      {posts.map((post, index) => (
        <div key={index} className="flex items-center mb-4">
          <Image
            src={post.image}
            alt={post.title} 
            className="object-cover mr-4 rounded-lg" 
            width={100} 
            height={100} 
          />
          <div>
            <h4 className="font-semibold mb-1">{post.title}</h4>
            <p className="text-sm text-gray-400">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
