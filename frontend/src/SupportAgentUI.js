import React, { useState } from 'react';
import { Search, Bot, FileText, Clock, ThumbsUp, Copy, Send } from 'lucide-react';

export default function SupportAgentUI() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  // Simulated agent response (replace with actual API call)
  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock response data
    const mockResults = {
      confidence_score: 0.89,
      similar_tickets: [
        {
          ticket_id: 'TICK-10234',
          subject: 'Unable to access account after password change',
          category: 'Login Issues',
          resolution: 'Cleared browser cache and cookies. Verified email confirmation was clicked. User successfully logged in after browser restart.',
          resolution_time_hours: 2.5,
          customer_satisfaction: 5
        },
        {
          ticket_id: 'TICK-10156',
          subject: 'Login page not loading correctly',
          category: 'Login Issues',
          resolution: 'Updated browser to latest version. Disabled conflicting browser extensions. Issue resolved.',
          resolution_time_hours: 1.8,
          customer_satisfaction: 4
        },
        {
          ticket_id: 'TICK-10089',
          subject: 'Password reset email not received',
          category: 'Password Reset',
          resolution: 'Checked spam folder. Verified email address in system. Resent password reset link. User successfully reset password.',
          resolution_time_hours: 0.5,
          customer_satisfaction: 5
        }
      ],
      kb_articles: [
        {
          number: 'KB0012456',
          short_description: 'Troubleshooting Login Issues',
          helpful_count: 342,
          view_count: 1523,
          category: 'Authentication'
        },
        {
          number: 'KB0012301',
          short_description: 'Browser Compatibility Guide',
          helpful_count: 189,
          view_count: 876,
          category: 'Technical'
        }
      ],
      recommendation: {
        summary: 'Based on 3 similar resolved tickets with 93% customer satisfaction',
        steps: [
          'Ask customer to clear browser cache and cookies',
          'Verify that password reset confirmation email was received and clicked',
          'Request customer to try a different browser or incognito mode',
          'If issue persists, manually reset password from admin panel',
          'Follow up to ensure successful login'
        ],
        estimated_time: '1-3 hours',
        success_rate: 93
      },
      template: `Dear [Customer Name],

Thank you for contacting support regarding your login issue.

I understand you're having trouble accessing your account. I've reviewed similar cases and found an effective solution.

**Resolution Steps:**

1. Clear your browser cache and cookies:
   - Chrome: Settings > Privacy and Security > Clear browsing data
   - Firefox: Settings > Privacy & Security > Clear Data

2. Verify your password reset:
   - Check your email for the password reset confirmation
   - Click the confirmation link if you haven't already

3. Try logging in using an incognito/private browsing window

4. If the issue continues, try a different browser

**Additional Resources:**
- [KB0012456] Troubleshooting Login Issues
- [KB0012301] Browser Compatibility Guide

**What to Expect:**
- Estimated resolution time: 1-3 hours
- Based on similar cases, this solution has a 93% success rate

Please follow these steps and let me know if you need any clarification. I'll follow up with you in 2 hours to ensure everything is working properly.

Best regards,
[Agent Name]
Customer Support Team

**Ticket Reference:** [TICKET-ID]`
    };
    
    setResults(mockResults);
    setLoading(false);
  };

  const copyTemplate = () => {
    navigator.clipboard.writeText(results.template);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">
              Customer Support Knowledge Agent
            </h1>
          </div>
          <p className="text-slate-600 ml-14">
            Get instant solutions from historical tickets and knowledge base articles
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Describe the customer issue... (e.g., 'Customer can't log in with correct password')"
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleSearch}
              disabled={loading || !query.trim()}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center gap-2 font-medium"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Search
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Recommendation */}
            <div className="lg:col-span-2 space-y-6">
              {/* Confidence Score */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-slate-800">AI Recommendation</h2>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    <ThumbsUp className="w-4 h-4" />
                    {(results.confidence_score * 100).toFixed(0)}% Confidence
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-slate-700">{results.recommendation.summary}</p>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium text-slate-800 mb-3">Recommended Resolution Steps:</h3>
                  <ol className="space-y-2">
                    {results.recommendation.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {idx + 1}
                        </span>
                        <span className="text-slate-700 pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex gap-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Est. Time: {results.recommendation.estimated_time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">Success Rate: {results.recommendation.success_rate}%</span>
                  </div>
                </div>
              </div>

              {/* Response Template */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-slate-800">Draft Customer Response</h2>
                  <button
                    onClick={copyTemplate}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    {copiedTemplate ? 'Copied!' : 'Copy Template'}
                  </button>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm text-slate-700 whitespace-pre-wrap max-h-96 overflow-y-auto">
                  {results.template}
                </div>
              </div>
            </div>

            {/* Right Column - Sources */}
            <div className="space-y-6">
              {/* Similar Tickets */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-slate-800 mb-4">Similar Tickets</h2>
                <div className="space-y-3">
                  {results.similar_tickets.map((ticket, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-mono text-blue-600">{ticket.ticket_id}</span>
                        <span className="flex items-center gap-1 text-xs text-slate-600">
                          {ticket.customer_satisfaction} <ThumbsUp className="w-3 h-3" />
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-800 mb-2">{ticket.subject}</p>
                      <p className="text-xs text-slate-600 mb-2">{ticket.resolution}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Clock className="w-3 h-3" />
                        {ticket.resolution_time_hours}h resolution time
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Knowledge Base Articles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-slate-800 mb-4">Knowledge Base</h2>
                <div className="space-y-3">
                  {results.kb_articles.map((article, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-mono text-blue-600">{article.number}</span>
                      </div>
                      <p className="text-sm font-medium text-slate-800 mb-2">{article.short_description}</p>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span>👍 {article.helpful_count} helpful</span>
                        <span>👁️ {article.view_count} views</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!results && !loading && (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Ready to Help</h3>
            <p className="text-slate-600 mb-6">
              Describe a customer issue to get instant recommendations from our knowledge base
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <button
                onClick={() => setQuery("Customer can't log in with correct password")}
                className="p-4 bg-slate-50 hover:bg-slate-100 rounded-lg text-left transition-colors"
              >
                <p className="text-sm font-medium text-slate-800 mb-1">Login Issues</p>
                <p className="text-xs text-slate-600">Can't access account</p>
              </button>
              <button
                onClick={() => setQuery("Application is running very slow")}
                className="p-4 bg-slate-50 hover:bg-slate-100 rounded-lg text-left transition-colors"
              >
                <p className="text-sm font-medium text-slate-800 mb-1">Performance</p>
                <p className="text-xs text-slate-600">Slow loading times</p>
              </button>
              <button
                onClick={() => setQuery("How do I integrate with Salesforce?")}
                className="p-4 bg-slate-50 hover:bg-slate-100 rounded-lg text-left transition-colors"
              >
                <p className="text-sm font-medium text-slate-800 mb-1">Integration</p>
                <p className="text-xs text-slate-600">Third-party setup</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
