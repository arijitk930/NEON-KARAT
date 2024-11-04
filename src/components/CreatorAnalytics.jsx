import React from "react";
import { TrendingUp, ChevronRight, ArrowUp } from "lucide-react";
import { User, MessageSquare } from "lucide-react";

const NotificationCard = ({ type, username, time, message, userImage }) => {
  return (
    <div className="w-72 bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center gap-3">
        <img src="https://placehold.co/500x500" alt="" />
      </div>
    </div>
  );
};

const sampleData = {
  currentSubscribers: 1200,
  subscriberGrowth: 24,
  postLikes: 3200,
  monthlyData: [
    { month: "Dec", subscriptions: 25000, tips: 2000 },
    { month: "Jan", subscriptions: 15000, tips: 1500 },
    { month: "Feb", subscriptions: 12000, tips: 1000 },
    { month: "Mar", subscriptions: 18000, tips: 1200 },
    { month: "Apr", subscriptions: 16000, tips: 1800 },
    { month: "May", subscriptions: 5000, tips: 500 },
  ],
};

const CreatorAnalytics = () => {
  const maxValue = Math.max(
    ...sampleData.monthlyData.map((d) => d.subscriptions + d.tips)
  );

  return (
    <div className="relative max-w-6xl mx-auto mt-6 mb-16">
      {/* Left floating notification */}
      <div className="absolute left-96 top-1/4 -translate-x-[calc(100%+2rem)] opacity-90 hover:opacity-100 transition-opacity shadow-2xl">
        <NotificationCard
          type="subscription"
          username="nick.muells"
          time="2d"
          userImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>

      {/* Main analytics card */}
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Creator analytics
            </h2>
            <p className="text-sm text-gray-500">
              Keep track of how your account is doing and how much you all earn
              this month.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Current subscribers
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-gray-900">
              {sampleData.currentSubscribers.toLocaleString()}k
            </span>
            <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
              <ArrowUp className="w-3 h-3 text-green-600" />
              <span className="text-xs font-medium text-green-600">
                {sampleData.subscriberGrowth} IN LAST 30 DAYS
              </span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-500 mb-4">Summary</h3>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Last 30 days</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">Post likes</span>
            <span className="text-lg font-semibold text-gray-900">
              {sampleData.postLikes.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-500 mb-4">
            Monthly income
          </h3>
          <div className="h-48 flex items-end gap-2">
            {sampleData.monthlyData.map((data, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-stretch gap-1"
              >
                <div className="flex-1 flex flex-col justify-end gap-1">
                  <div
                    className="bg-green-400 rounded-sm"
                    style={{
                      height: `${(data.subscriptions / maxValue) * 100}%`,
                    }}
                  />
                  <div
                    className="bg-pink-400 rounded-sm"
                    style={{
                      height: `${(data.tips / maxValue) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-xs text-gray-500 text-center">
                  {data.month}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-6 mt-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-sm" />
              <span className="text-sm text-gray-500">Subscriptions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pink-400 rounded-sm" />
              <span className="text-sm text-gray-500">Tips</span>
            </div>
          </div>
        </div>

        <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors">
          <div>
            <h3 className="text-base font-medium text-gray-900">
              Monetization settings
            </h3>
            <p className="text-sm text-gray-500">
              Connect a bank account to set a subscription price or start
              accepting tips.
            </p>
          </div>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Right floating notification */}
      <div className="absolute shadow-2xl right-80 top-2/3 translate-x-[calc(100%+2rem)] opacity-90 hover:opacity-100 transition-opacity">
        <NotificationCard
          type="comment"
          username="milkthistle72"
          time="23h"
          message="This is such a 🔥 shot. We should collaborate..."
          userImage="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>
    </div>
  );
};

export default CreatorAnalytics;
